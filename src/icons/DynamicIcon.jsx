import { HomeIcon } from './HomeIcon';
import { HttpIcon } from './HttpIcon';
import { WifiIcon } from './WifiIcon';

export function DynamicIcon({ iconFile, fillColor }) {
    switch (iconFile) {
        case 'WifiIcon.jsx':
            return <WifiIcon fillColor={fillColor} />
            case 'HttpIcon.jsx':
            return <HttpIcon fillColor={fillColor} />
        default:
            return <HomeIcon fill={fillColor} />;
    }

}
