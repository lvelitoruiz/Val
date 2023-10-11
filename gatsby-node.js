module.exports.onCreateNode = async ({ node, actions, createNodeId, createContentDigest }) => {
    if (node.internal.type === "StrapiPostType") {
        const newNode = {
            id: createNodeId(`StrapiPostType-${node.id}`),
            parent: node.id,
            internal: {
                content: JSON.stringify(
                  unified()
                    .use(markdown)
                    .use(html, { sanitize: fieldYouWantToHtmlerize })
                    .processSync(fieldYouWantToHtmlerize)
                ) || " ",
                type: "StrapiPostType",
                mediaType: "text/markdown",
                contentDigest: createContentDigest({
                  content: JSON.stringify(fieldYouWantToHtmlerize),
                })
            },
        };
        actions.createNode(newNode);
        actions.createParentChildLink({
            parent: node,
            child: newNode,
        });
    }
  };