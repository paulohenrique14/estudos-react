export const usePostData = (url) => {

    const handlePostData = async(product) => {

        try {
            const res = await fetch(url, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)  
            })

            if (!res) {
                throw new Error('Erro post');
            }

            

        } catch (error) {
            console.log('erro ao dar post na API: ', error)
        }
    }


    return {handlePostData}
}