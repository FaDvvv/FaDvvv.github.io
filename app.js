document.addEventListener('DOMContentLoaded', () => {
    const loomianFrameTemplate = document.getElementById("loomian-frame-template");
    const partyFrames = document.querySelectorAll('.party-frame');

    const items = [
        {title: "loomian 1", body: "body1", id: "swap-btn-1"},
        {title: "loomian 2", body: "body2", id: "swap-btn-2"},
        {title: "loomian 3", body: "body3", id: "swap-btn-3"},
        {title: "loomian 4", body: "body4", id: "swap-btn-4"},
        {title: "loomian 5", body: "body5", id: "swap-btn-5"},
        {title: "loomian 6", body: "body6", id: "swap-btn-6"},
        {title: "loomian 7", body: "body7", id: "swap-btn-7"}
    ];

    partyFrames.forEach((partyFrame) => {
        items.forEach(({ title, body, id }) => {
        const clone = loomianFrameTemplate.content.cloneNode(true);

        clone.querySelector('h2').textContent = title;
        clone.querySelector('p').textContent = body;

        const button = clone.querySelector('button');
            button.id = id;

            // Attach hover condition logic
            button.addEventListener('mouseenter', () => {
                // Example condition: allow hover for even-numbered loomians
                
                // code to check if you can swap

                button.classList.add("hover-allowed");
            });

            button.addEventListener('mouseleave', () => {
                button.classList.remove("hover-allowed");
            });

            partyFrame.appendChild(clone);
        });
    });
});