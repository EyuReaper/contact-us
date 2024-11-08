interface ContactFormData {
    fullname: string;
    email: string;
    phonePrefix: string;
    phoneNumber: string;
    message: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
    try {
        const response = await
        fetch('https://wxqvgrmyjntoewjrhskf.supabase.co/contact',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if(!response.ok){
            throw new Error('Failed to submit form');
        }

        return await response.json();
    }catch (error) {
        throw new Error('Failed to submit form');
    }
    };
}