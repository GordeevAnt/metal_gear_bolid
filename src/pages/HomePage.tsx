import Item_List from "../widgets/Items/Item_List";
import PageTitle from "../widgets/PageTitle";

export default function HomePage() {
    return (
        <>
            <PageTitle title="Главная"/>
            <div className="home_page">
                <Item_List />
            </div>
        </>
    )
}