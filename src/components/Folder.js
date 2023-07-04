import React , {useState } from 'react'

function Folder({ handleInsertNode, handleDeleteNode, handleRenameNode, explorer }) {
  
    const [ expand , setExpand] = useState(false);
    //For showing or hiding our input box
    const [ showInput ,setShowInput ] = useState({
        visible : false,
        isFolder : null
    })

    const [renameTriggered , setRenameTriggered ] = useState(false);
    const [fileName , setFileName ] = useState(explorer.name);

    const handleNewFolder = (e , isFolder ) => {
       e.stopPropagation(); 
       setExpand(true);
       setShowInput({
            visible : true,
            isFolder : isFolder
       });
    }

    const onAddFolder = (e) => {
        //Enter key
        if(e.keyCode === 13 && e.target.value ){
            //Add Logic
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
            setShowInput({...showInput , visible : false});
        }

    }

    const handleDelete = (e) => {
        e.stopPropagation();
        handleDeleteNode(explorer.id);
    }

    const handleRename = (e) => {
        e.stopPropagation();
        setRenameTriggered(true);
    }

    const renameFolderName = (e) => {
        if(e.keyCode === 13 && e.target.value ){
            handleRenameNode(explorer.id , e.target.value);
            setRenameTriggered(false);
        }
    }


  if(explorer.isFolder){
    return (
        <div style = {{marginTop : 5}}>
            <div className='folder' onClick = {()=> setExpand(!expand)}>
                {
                    renameTriggered ? 
                    <input 
                    className='inputContainer__input' 
                    type ='text' 
                    value = {fileName}
                    onKeyDown={ renameFolderName }
                    onChange={(e) => setFileName(e.target.value)}
                    /> :
                    <span>📁 {explorer.name}</span>
                }
                
                <div>
                    <button 
                    onClick={(e) => handleNewFolder(e , true)}
                    >Folder +</button>
                    <button
                    onClick={(e) => handleNewFolder(e , false)}
                    >File +</button>
                    <button
                    onClick = {(e) => handleRename(e)}
                    >Rename</button>
                    <button
                    onClick = {(e) => handleDelete(e)}
                    >Delete</button>
                </div>
            </div>
            <div style = {{ display : expand ? "block" : "none" , paddingLeft : 25}}>
                {
                    showInput.visible && (
                        <div className='inputContainer'>
                            <span>{showInput.isFolder?"📁":"📄"}</span>
                            <input 
                            className='inputContainer__input'
                            type = 'text'
                            onKeyDown={onAddFolder}
                            autoFocus
                            onBlur={() => setShowInput(
                                {...showInput , visible : false}
                                )}
                            />
                        </div>
                    )
                }
                {explorer.items.map((exp) => {
                    return (
                        <Folder 
                        explorer = {exp} 
                        key = {exp.id} 
                        handleInsertNode={handleInsertNode}
                        handleDeleteNode={handleDeleteNode}
                        handleRenameNode={handleRenameNode}
                        />
                    )
                })}
            </div>
        </div>
    )
  } else {
    return (
        <div>
            {
                renameTriggered ? 
                <input 
                className='inputContainer__input' 
                type ='text' 
                value = {fileName}
                onKeyDown={ renameFolderName }
                onChange={(e) => setFileName(e.target.value)}
                /> :
                <span className='file'>📄 {explorer.name}</span>
            }
            
            <button
            onClick = {(e) => handleRename(e)}
            >Rename</button>
            <button
            onClick = {(e) => handleDelete(e)}
            >Delete</button>
        </div>
    );
  }
}

export default Folder;