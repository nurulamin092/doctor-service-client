import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <section className='container mt-2'>
                <h1 className='text-info'>Difference between authorization and authentication?</h1>
                <article>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Authorization</th>
                                <th>Authentication</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Authentication verifies who the user is.</td>
                                <td>Authorization determines what resources a user can access.</td>

                            </tr>
                            <tr>
                                <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                                <td>Authorization works through settings that are implemented and maintained by the organization.</td>

                            </tr>
                            <tr>
                                <td>Authentication is the first step of a good identity and access management process.	</td>
                                <td >Authentication is the first step of a good identity and access management process.	</td>

                            </tr>
                            <tr>
                                <td>Authentication is visible to and partially changeable by the user.	</td>
                                <td >Authorization isn’t visible to or changeable by the user.
                                </td>

                            </tr>
                            <tr>
                                <td>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</td>
                                <td >Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</td>

                            </tr>

                        </tbody>
                    </Table>
                </article>
            </section>
            <section className='container'>
                <article>
                    <h1 className='text-info'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p>
                        Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

                        You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.

                        As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.
                    </p>
                </article>
            </section>
            <section className='container'>
                <article>
                    <h1 className='text-info'> What other services does firebase provide other than authentication?</h1>
                    <h3>Hosting Options</h3>
                    <p>Firebase offers only one type of hosting setup at Google Cloud platform. So, you are compelled to use Firebase cloud infrastructure and share resources with other applications.

                        This approach is not the best option for complex applications that require customized server settings for optimal performance. Since Firebase does not offer Dedicated Server or Enterprise contracts, you may face several limitations once your app begins to scale.

                        In direct contrast to Firebase, the hosting option of Parse is highly flexible. You can choose the self-hosting option and deploy your Parse project on your selected server, such as Digital Ocean, AWS, Azure, Google Cloud, and so on</p>
                    <h3>Data Storage</h3>
                    <p>1.5: Data Storage. Unless otherwise provided for by the Paid Services, Customer Data will be stored in the United States (“Hosting Data Location”), except that the Hosting Data Location may not apply to Customer Data copied by Customer or a Customer’s End User to another location or used with other Google products and services.

                        Firebase Privacy and Security documentation revealed that the platform satisfies GDPR requirements. The document also revealed that the data storage and processing locations may vary by service.

                        Parse is more flexible in this regard. Given the freedom to host Parse on the server of your choice, the storage of data, and service can be anywhere around the world.</p>
                </article>
            </section>
        </div>
    );
};

export default Blogs;