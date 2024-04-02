const Footer = () => {

  return (
    <>
        <footer>
            <div className="footer py-12 bg-black flex justify-around">
                <div className="flex justify-center items-center gap-5">
                    <a href="">    
                    <i class="fa-brands fa-facebook text-white text-[35px] transition-all ease-linear delay-100 hover:text-[#0866ff] hover:scale-125"></i>
                    </a>
                    <a href="">
                    <i class="fa-brands fa-linkedin text-white text-[35px] transition-all ease-linear delay-100 hover:text-[#0077b5] hover:scale-125"></i>
                    </a>
                    <a href="https://github.com/thecodemaster12/">
                    <i class="fa-brands fa-github text-white text-[35px] transition-all ease-linear delay-100 hover:text-[#6e5494] hover:scale-125"></i>
                    </a>
                </div>
                <div className="flex justify-center">
                    <a href='https://github.com/samadpls/Islamic-qoutes'><img src='https://islamic-qoutes.cyclic.app' alt='samadpls/islamic-qoutes' className="w-full h-auto" /></a>
                </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;
