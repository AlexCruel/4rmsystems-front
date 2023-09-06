import cn from "./styles.module.scss";

const Map = () => {
    return (
        <div className={cn.container}>
            <h1>Офисы компании 4RM Systems</h1>
            {/*<iframe*/}
            {/*    className={cn.map}*/}
            {/*    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37598.35082112029!2d27.47064095!3d53.9158075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1690897582422!5m2!1sru!2sby"*/}
            {/*    width="600" height="450" allowFullScreen="" loading="lazy"*/}
            {/*    referrerPolicy="no-referrer-when-downgrade">*/}
            {/*</iframe>*/}
            <iframe
                className={cn.map}
                src="https://www.google.com/maps/d/u/0/embed?mid=1QI9riQnV0tlQ2EZeh-o9HvCOUnuQENk&ehbc=2E312F"
                width="600"
                height="450"
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            {/*<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1eafAPrvLP6t4F3Yeo6BxE0vLYOAfWKc&ehbc=2E312F" width="640" height="480"></iframe>*/}
            {/*<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1eafAPrvLP6t4F3Yeo6BxE0vLYOAfWKc&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>*/}
        </div>
    );
}

export default Map;