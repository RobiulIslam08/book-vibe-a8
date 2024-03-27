
export const setReadBookDataLS = (data)=>{
    const saveReadBook = JSON.parse(localStorage.getItem('ReadBook') )|| [];
    const exitReadBook = saveReadBook.find(item => item.bookId ==data.bookId)
    if(!exitReadBook){
        saveReadBook.push(data)
        localStorage.setItem("ReadBook",JSON.stringify(saveReadBook));
        

    } else {
        alert('already ache')
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
        localStorage.setItem("WishListBook", JSON.stringify(saveWishListBook));
    } else {
        alert('Book already exists in the wishlist.');
    }
}

export const getWishListBookDataLS = () => {
    const getWishListBook = JSON.parse(localStorage.getItem('WishListBook')) || [];
    return getWishListBook
}

