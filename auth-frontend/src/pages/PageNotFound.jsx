
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const PageNotFound = () => {
  return (
    <>
    <div className="py-[20vh] flex flex-col justify-center items-center max-w-2xl mx-auto">
    <DotLottieReact
      src="https://lottie.host/7e501612-e94a-4426-8c74-276101e13641/RVfz26ojv1.lottie"
      loop
      autoplay
    />
    <h1 className="text-[5vw] text-center text-shadow-blue-600 text-blue-600 font-bold">Page Not Found!</h1>
    </div>
    </>
  )
}

export default PageNotFound