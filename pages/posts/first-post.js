import {Button,Layout} from '../../components'

export default function FirstPost() {
    function constructor(){
        
    }
    function onUpdate(){

    }
    return (
        <>
        <Layout>
            <h1>First Post</h1>
        </Layout>
        <Button
        onclick={onUpdate}
        title={"Update"}></Button>
        </>
        
    );
}