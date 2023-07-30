function Footer() {
  return ( 
    <div className="grid grid-cols-3 md:grid-cols-3 gap-y-10 px-12 md:px-40 py-14 bg-gray-100">
      <div className="space-y-4 text-xs md:text-sm text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How GruhaPravesh Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>GruhaPravesh plus</p>
        <p>Gruhapravesh Luxe</p>
      </div>
      <div className="space-y-4 text-xs md:text-sm text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accesibility</p>
        <p>Volunteers</p>
        <p>Partnered Institution</p>
        <p>Discord Community</p>
      </div>
      <div className="space-y-4 text-xs md:text-sm text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>GruhaPravesh Internal support</p>
        <p>Trust @ GruhaPravesh</p>
      </div>
    </div>
  );
}

export default Footer;
