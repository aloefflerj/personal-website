export function LinkBlock(props) {
    const { href } = props;
    console.log(props);

    if (href.includes('https://github.com/user-attachments/assets')) {
        return <video controls="controls" width="800" height="600">
            <source src={href} />
      </video>
    }

    return <a {...props} />;
}
