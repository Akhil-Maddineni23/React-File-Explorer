const useTraverseTree = () => {
    function insertNode(tree, folderId , item , isFolder){
        if(tree.id === folderId && tree.isFolder){
            //unshift - add ele at the top
            tree.items.unshift({
                id : new Date().getTime(),
                name : item,
                isFolder,
                items : []
            })
            return tree;
        }
        let latestNode;
        latestNode = tree.items.map((ob) => {
            return insertNode(ob , folderId , item , isFolder);
        });
        return {...tree , items : latestNode};
    }

    function deleteNode(tree , folderId , parent){
        // Node can be either File or Folder
        if(tree.id === folderId){
            parent.items = parent.items.filter((f) => f.id !== folderId);
        }
        
        tree.items.map((ob) => {
             deleteNode(ob , folderId , tree);
        });
        return {...tree}
    }

    function renameNode(tree , folderId , fileName){
        if(tree.id === folderId){
            tree.name = fileName;
            return tree;
        }
        let latestNode;
        latestNode = tree.items.map((ob) => {
            return renameNode(ob , folderId , fileName);
        });
        return {...tree};
    }

    return { insertNode , deleteNode , renameNode };
}


export default useTraverseTree;