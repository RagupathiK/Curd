import React from 'react'

export default function Child({ data }) {
    return (
        <div>
            <div className='d-flex'>
                {data.users.map((i) =>
                    <div className='card col' >
                        <h1>{i.Name}</h1>
                    </div>
                )}
            </div>

        </div>
    )
}
