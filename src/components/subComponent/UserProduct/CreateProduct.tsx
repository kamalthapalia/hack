import { ChangeEvent, useState } from "react";
import { serverApi } from "../../../utils/axios";
import { useNavigate } from "react-router-dom";
import { MarketPlacePostApiType } from "../../../definations/apiTypes";

const CreateProduct = () => {
    const navigate = useNavigate();
    
    const [productImg, setProductImg] = useState<File>();
    const [formData, setFormData] = useState({
        itemName: '',
        price: 0,
        details: '',
        itemType: "animal",
        type: 'sale'

    })

    const handleFormDataChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(e.target)
        setFormData(prevState => ({
            ...prevState,
            [name]: name == 'price' ? Number(value) : value
        }));
    }

    const handleProductImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length == 0 ) return;

        const productImg = files[0];
        const supportedTypes = ['image/jpeg', 'image/png'];

        if (supportedTypes.includes(productImg.type)){
            setProductImg(productImg);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!productImg) return;

        const imageFileForm = new FormData();
        imageFileForm.append('productImg', productImg);

        try {
            const res = await serverApi.post(`/marketplace`, { ...formData })
            const {data}: {data: MarketPlacePostApiType} = res.data;
            await serverApi.patch(`/marketplace/${data._id}`, imageFileForm);

            navigate('/dash/profile/me/products')
        } catch (error) {
            alert("Error occured")
            console.log('error')
            console.log(error)
        }
    }

    return (
        <form onSubmit={e => handleSubmit(e)} className={`w-full max-w-[600px] container mx-auto my-10`}>
            <p className={` text-lg font-semibold mb-4`}>Create a new Product.</p>
            <div className={`flex flex-col gap-2`}>
                <div className={`flex flex-col gap-1.5`}>
                    <label className={`font-semibold`} htmlFor="itemName">Item Name</label>
                    <input value={formData.itemName} onChange={e => handleFormDataChange(e)}
                        className={`border rounded-md border-cyan-600  focus-within:border-cyan-500 p-2 py-1 outline-none`}
                        placeholder={`Enter the product name`}
                        type="text" name="itemName" id="itemName"
                        maxLength={50}
                    />
                </div>
                <div className={`flex flex-col gap-1.5`}>
                    <label className={`font-semibold`} htmlFor="details">Details</label>
                    <textarea value={formData.details} onChange={e => handleFormDataChange(e)}
                        className={`border rounded-md border-cyan-600  focus-within:border-cyan-500 h-[200px] p-2 py-1 outline-none resize-none`}
                        placeholder={`Enter description of product. \nPreferebly > type > usage period > condition > paymentMethod`}
                        name="details"
                        maxLength={1000}
                    />
                </div>
                <div className={`flex flex-col gap-1.5`}>
                    <label className={`font-semibold`} htmlFor="productImg">Product Image</label>
                    <input type="file" name="productImg" id="productImg" onChange={e=> handleProductImageChange(e)}/>
                </div>
                <div className={`flex flex-col gap-1.5`}>
                    <label className={`font-semibold`} htmlFor="itemType">What Type of Item is it ?</label>
                    <select name="itemType" defaultValue={formData.itemType} onChange={e => handleFormDataChange(e)} className=" bg-rose-700/80 rounded-sm text-white outline-none">
                        <option value="animal">Animal</option>
                        <option value="product">Product</option>
                        <option value="tool">Tool</option>
                        <option value="machinery">Machinery</option>

                    </select>
                </div>
                <div className={`flex flex-col gap-1.5`}>
                    <label className={`font-semibold`} htmlFor="type">What are you hoping to do with Item ? </label>
                    <select name="type" defaultValue={formData.type} onChange={e => handleFormDataChange(e)} className=" bg-blue-700/80 rounded-sm text-white outline-none">
                        <option value="sale">Sale</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className={`font-semibold`} htmlFor="price">Price for sale / Price for hourly rate : </label>
                    <input type='number' step={"0.01"} onChange={e => handleFormDataChange(e)} onKeyDown={e => e.key == "ArrowUp" || e.key == 'ArrowDown' ? e.preventDefault() : ''} name="price" className=" bg-slate-100 outline-none px-2" />
                </div>

                <button type="submit" className={`w-fit bg-blue-500 hover:bg-blue-600 text-white transition rounded px-14 py-2`}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default CreateProduct;