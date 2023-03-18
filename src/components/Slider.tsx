export type SliderElement = {
  title: string;
  caption: string;
  imageSource: string;
};

type SliderProps = {
  value: SliderElement[];
};

export function Slider({ value }: SliderProps) {
  return (
    <div className="featured__right">
      <div className="featured__carousel">
        <span id="left"></span>
        {value.map((v) => (
          <div className="featured__product">
            <img src={v.imageSource} alt="Electric scooter" draggable="false" />

            <div className="featured__product--description">
              <h2 className="text-body-sm-bold">{v.title}</h2>
              <p className="text-caption">{v.caption}</p>
              <a href="/reservation" className="text-caption link-underlined">
                Make a reservation
                <img src="src\assets\arrow-right.svg" alt="Arrow right" />
              </a>
            </div>
          </div>
        ))}

        <span id="right"></span>
      </div>
    </div>
  );
}
