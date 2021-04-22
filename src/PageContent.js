import { Box } from "@material-ui/core";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import PromoPage from "./PromoPage";

function PageContent(props) {
    return (
        <Box>
        {
            {
                Home: <HomePage />,
                Menu: <MenuPage />,
                Promotions: <PromoPage />,
            }[props.active]
        }
        </Box>
    );
}

export default PageContent