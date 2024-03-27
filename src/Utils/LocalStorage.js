import { toast } from "react-toastify";

export const setReadBookDataLS = (data)=>{
    const saveReadBook = JSON.parse(localStorage.getItem('ReadBook') )|| [];
    const exitReadBook = saveReadBook.find(item => item.bookId ==data.bookId)
    if(!exitReadBook){
        saveReadBook.push(data)
        toast("book added read book")
        localStorage.setItem("ReadBook",JSON.stringify(saveReadBook));
        

    } else {
        toast.warning("already added!")

    }
}
export const getReadBookDataLS = () => {
    const getBook = JSON.parse(localStorage.getItem('ReadBook')) || [];
    return getBook
}

export const setWishBookDataLS = (data) => {
    const saveWishListBook = JSON.parse(localStorage.getItem('WishListBook')) || [];
    const existInWishList = saveWishListBook.find(item => item.bookId == data.bookId);
    if (!existInWishList) {

        saveWishListBook.push(data);
        toast("book added wish List")

        localStorage.setItem("WishListBook", JSON.stringify(saveWishListBook));
    } else {
        toast.warning("already added!")
    }
}

export const getWishListBookDataLS = () => {
    const getWishListBook = JSON.parse(localStorage.getItem('WishListBook')) || [];
    return getWishListBook
}

