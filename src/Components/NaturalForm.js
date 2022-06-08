const NaturalForm = () => {


    return (
        <form id="nlForm" class="nlForm" action="#">

            <p>I feel like watching a
            </p>
           
            <select>   
                <option value="Comedy">Comedy</option>
                <option value="Horror">Horror</option>
                <option value="Thriller">Thriller</option>
                <option value="Romance">Romance</option>
                <option value="Action">Action</option>
            </select>

            <p>and I have</p>

            <select>
                <option value="90">less than 90 minutes</option>              
                <option value="120">less than 2 hours</option>                            
                <option value="1000">time is not a concept</option>                                            
            </select>

            <div>
                <select>   
                    <option value="Comedy">Newest movies</option>
                    <option value="Horror">API 1</option>
                    <option value="Thriller">API 2</option>
                    <option value="Romance">API 3</option>
                    <option value="Action">API 4</option>
                </select>
            </div>

            <div>
                <input type="text" />
                <button>Name Search</button>
            </div>
               
        </form>
    )
}

export default NaturalForm