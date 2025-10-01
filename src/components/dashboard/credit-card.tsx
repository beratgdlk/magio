import { Wallet } from '@/types';

interface CreditCardProps {
  wallet: Wallet;
  variant: 'front' | 'back';
}

export const CreditCard = ({ wallet, variant }: CreditCardProps) => {
  if (variant === 'front') {
    return (
      <svg width="100%" height="172" viewBox="0 0 324 172" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <rect opacity="0.1" width="324" height="172" rx="15" fill="url(#paint0_linear_3210_426)"/>
        <rect x="0.25" y="0.25" width="323.5" height="171.5" rx="14.75" fill="url(#paint1_linear_3210_426)" stroke="url(#paint2_linear_3210_426)" strokeWidth="0.5" style={{backdropFilter: 'blur(10px)'}}/>
        <text x="24" y="35" fill="white" fontSize="14" fontWeight="500">Maglo.</text>
        <text x="24" y="52" fill="#F5F5F5" fontSize="12" opacity="0.7">Commercial Bank</text>
        <text x="24" y="85" fill="white" fontSize="16" fontFamily="monospace">5495 7381 3789 2321</text>
        <text x="24" y="110" fill="#929EAE" fontSize="11">Commercial Bank</text>
        <text x="24" y="135" fill="white" fontSize="12">09/25</text>
        <text x="24" y="153" fill="#929EAE" fontSize="10">85952548****</text>
        <text x="280" y="145" fill="#1A1F71" fontSize="16" fontWeight="bold">VISA</text>
        <defs>
          <linearGradient id="paint0_linear_3210_426" x1="53.5" y1="-76.5" x2="310.856" y2="354.77" gradientUnits="userSpaceOnUse">
            <stop stopColor="#959595"/>
            <stop offset="1" stopColor="#324000"/>
          </linearGradient>
          <linearGradient id="paint1_linear_3210_426" x1="162" y1="0" x2="162" y2="172" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.4"/>
            <stop offset="1" stopColor="white" stopOpacity="0.1"/>
          </linearGradient>
          <linearGradient id="paint2_linear_3210_426" x1="-63.3046" y1="-152" x2="331.012" y2="186.298" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.4"/>
            <stop offset="1" stopColor="white" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg width="100%" height="247" viewBox="0 0 354 247" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect y="37" width="354" height="210" rx="15" fill="url(#paint0_linear_3210_373)"/>
      <text x="42" y="70" fill="white" fontSize="16" fontWeight="500">Maglo.</text>
      <text x="42" y="88" fill="white" fontSize="13" opacity="0.7">Universal Bank</text>
      <text x="47" y="140" fill="white" fontSize="18" fontFamily="monospace">5495 7381 3789 2321</text>
      <text x="47" y="165" fill="#868685" fontSize="12">Universal Bank</text>
      <text x="47" y="197" fill="white" fontSize="14">09/25</text>
      <text x="47" y="217" fill="#868685" fontSize="12">85952548****</text>
      <path d="M311.855 216.624H299.146V194.067H311.855V216.624Z" fill="#FF5F00"/>
      <path d="M299.952 205.346C299.952 200.77 302.121 196.694 305.5 194.067C303.029 192.146 299.912 191 296.523 191C288.502 191 282 197.423 282 205.346C282 213.269 288.502 219.691 296.523 219.691C299.912 219.691 303.029 218.545 305.5 216.624C302.121 213.997 299.952 209.921 299.952 205.346Z" fill="#EB001B"/>
      <path d="M329 205.346C329 213.269 322.498 219.691 314.477 219.691C311.088 219.691 307.971 218.545 305.5 216.624C308.878 213.997 311.048 209.921 311.048 205.346C311.048 200.77 308.878 196.694 305.5 194.067C307.971 192.146 311.088 191 314.477 191C322.498 191 329 197.423 329 205.346Z" fill="#F79E1B"/>
      <defs>
        <linearGradient id="paint0_linear_3210_373" x1="7.52125" y1="47" x2="337.163" y2="188.675" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4A4A49"/>
          <stop offset="1" stopColor="#20201F"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

