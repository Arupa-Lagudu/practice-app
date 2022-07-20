export default function CollapsibleList() {
    const [open, setOpen] = React.useState(false);
    const handleClick = (clickedIndex) => {
        setOpen(!open);
      };

};