import {photographers} from "./photographers";

export const PhotoCredits = () => {
    return (
        <div>
            <h1>Photo Credits</h1>
            <table>
                <thead>
                <tr>
                    <th>Photographer</th>
                    <th>Site link</th>
                    <th>Photos</th>
                </tr>
                </thead>
                <tbody>
                {photographers.map(photographer => (
                        <tr>
                            <td>
                                {photographer[0]}
                            </td>
                            <td>
                                {photographer[1]}
                            </td>
                            <td className="thumbs-row">
                                {photographer[2].map(photo => (
                                    <img className="thumbnail"
                                         src={`/img/${photo}.png`}
                                         alt='food' />
                                ))}
                            </td>
                        </tr>
                    )

                )}

                </tbody>
            </table>
        </div>
    )
}