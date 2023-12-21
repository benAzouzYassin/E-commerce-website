// type Props = {} & Product


export default function Item(props : any) {
    return  <div className="item-card flex flex-col py-5 relative px-2 w-[17rem] ">
    <img src="https://firebasestorage.googleapis.com/v0/b/hgstore-25933.appspot.com/o/chessboard.png%20date:(Wed,%2020%20Dec%202023%2023:02:22%20GMT)?alt=media"  className="h-[65%] aspect-square" alt="" />
    <span className="px-2 py-[2px] text-xs bg-gradient-to-br from-amber-800 to-rose-800  shadow-md rounded-full font-medium text-neutral-50 absolute top-2 left-2 w-fit">category</span>
    <div className="flex items-center px-5 mt-auto">
    <p className="font-bold line-clamp-1 text-lg text-left w-full">Chess board</p>
    <p className="justify-self-end font-medium">10.99$</p>
    </div>
    
    <button className=" hover:translate-y-[-2px] hover:scale-[101%] active:scale-[98%]  transition-transform w-[90%] mx-auto bg-gradient-to-br from-amber-600 to-red-500 mt-auto py-1 rounded font-semibold text-white">Add to cart</button>
</div>
}