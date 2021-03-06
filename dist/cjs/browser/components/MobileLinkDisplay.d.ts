/// <reference types="react" />
import { IQRCodeModalOptions } from "@walletconnect/types";
import { TextMap } from "../types";
interface MobileLinkDisplayProps {
    qrcodeModalOptions?: IQRCodeModalOptions;
    text: TextMap;
    uri: string;
}
declare function MobileLinkDisplay(props: MobileLinkDisplayProps): JSX.Element;
export default MobileLinkDisplay;
//# sourceMappingURL=MobileLinkDisplay.d.ts.map