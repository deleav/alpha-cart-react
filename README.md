# Alpha Cart React

React version alpha cart.
This project is written by React and css module.

## Installation

```
yarn install
```

## Usage

```
yarn start
```

## Structure

```
.
├── public               # Static file
└── src                  # All source code
    ├── assets           # Assets (jpg/svg/...)
    ├── utils            # Shared function
    └── components       # All components
        ├── checkoutStep # Checkout information (ShippingInfo/ShippingMethod/PaymentInfo)
        ├── footer       # Footer and buttons
        ├── form         # Form field components (Input/Radio/Select)
        ├── shared       # Any shared components
        ├── step         # Current step component
        └── Main         # Entry component
```

## Components Design

這裡把比較特別的部分列出來

### Layout

大多數都採用 grid system 實作，以 ShippingInfo 為例，這個步驟的 input 元件比較複雜，所以先在 Container 的部分使用 grid 先決定好要切成幾格

```css
.shippingInfoMain {
  display: grid;
  grid-template-columns: repeat(6, 65px);
  grid-template-rows: repeat(3, 64px);
  gap: 24px 30px;
}
```

然後用 inline style 來決定該元件要怎麼放進這些格子內

```jsx
<div className={styles.shippingInfoMain}>
  <Select
    style={{ gridColumn: '1 / span 2' }}
    label="稱謂"
    name="salutation"
    value={salutation}
    options={[
      { name: '先生', value: 'Mr.' },
      { name: '小姐', value: 'Ms.' },
    ]}
    onChange={handleChange('salutation')}
  />
</div>
```

### Form Components

Input/Radio/Select 這類 Form 表單的設計都與原生的行為接近，至少都能接收 value 以及 onChange，來做到這兩件事

1. 依照 value 渲染
2. 根據事件更改 value

以及這幾個元件行為、樣式相同，有一定的複雜度，又被大量使用，所以將之抽象化，包成元件重複使用

### Form State Control

作業 3 之後才有的部分

這裡作法很簡單，把整個 form 放進 state，更新的時候另外寫 `handleFormChange`，用 key 當第一個參數，value 當第二個參數，來更新欄位內容

```jsx
// Main.jsx
export default function Main() {
  const [form, setForm] = useState(initialValues);

  const handleFormChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ...
}
```

### Context State Control

作業 4 之後才有的部分

由於作業 3 已經有將整體更新策略給設計好了，所以這裡就直接把整個 form 放進 context，然後在需要的地方使用，就不需要透過 Props 一路往下傳到最底下

```jsx
// Main.jsx
export default function Main() {
  const [form, setForm] = useState(initialValues);

  const handleFormChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // pseudo code
  return (
    <FormContext.Provider value={{ form, handleFormChange }}>
      <div className={styles.main}>
        <Step />
        <PaymentInfo />
        <Footer />
      </div>
    </FormContext.Provider>
  );
}
```

```jsx
// ShippingInfo.jsx
export default function ShippingInfo() {
  const { form, handleFormChange } = useContext(FormContext);

  // ...
}
```
