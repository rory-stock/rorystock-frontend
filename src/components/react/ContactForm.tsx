import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form';

const FormSchema = z.object({
  name: z
      .string()
      .min(1, {
        message: 'Please enter your name.',
      })
      .max(255, {
        message: 'Name exceeds the maximum length of 255 characters.',
      }),
  email: z
      .string()
      .email(),
  message: z
      .string()
      .min(10, {
        message: 'Message must be at least 10 characters.',
      })
      .max(5000, {
        message: 'Message exceeds the maximum length of 5000 characters.',
      }),
  contactMethod: z
      .string()
      .max(255, {
        message: 'Contact method exceeds the maximum length of 255 characters.',
      })
      .optional(),
});

export function ContactForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
        name: "",
        email: "",
        message: "",
        contactMethod: "",
        },
    });

    const api = "rorystock-api.rorystock06.workers.dev/contact";
    function onSubmit(data: z.infer<typeof FormSchema>) {
        form.reset();
        console.log(data);

        // Send data to backend
        fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(async r => {
            if (r.ok) {
                // Success
                return r.json();
            } else {
                // Error
                const err = await r.json();
                return await Promise.reject(err);
            }
        });
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 flex flex-col gap-2 max-w-fit items-stretch">
            <div className={"flex flex-col"}>
                <div className={"flex flex-row"}>
                    <label htmlFor="name" className={"flex-none font-neue-haas-grotesk-display font-bold text-lg md:text-xl pr-2 selection:text-blue-499 cursor-text"}>Your Name</label>
                    <input type="text" className={"shrink w-3/4 border-2 border-black rounded pl-2"} {...form.register("name")} />
                </div>
                {form.formState.errors.name && <p className={"font-neue-haas-grotesk-text font-semibold text-red-500 selection:text-neutral-500"}>{form.formState.errors.name.message}</p>}
            </div>

            <div className={"flex flex-col"}>
                <div className={"flex flex-row"}>
                    <label htmlFor="email" className={"flex-none font-neue-haas-grotesk-display font-bold text-lg md:text-xl pr-2 selection:text-blue-499 cursor-text"}>Your Email</label>
                    <input type="email" className={"shrink w-3/4 border-2 border-black rounded pl-2"} {...form.register("email")} />
                </div>
                {form.formState.errors.email && <p className={"font-neue-haas-grotesk-text font-semibold text-red-500 selection:text-neutral-500"}>{form.formState.errors.email.message}</p>}
            </div>

            <div className={"flex flex-col"}>
                <div className={"flex flex-col"}>
                    <label htmlFor="message" className={"font-neue-haas-grotesk-display font-bold text-lg md:text-xl pr-2 selection:text-blue-499 cursor-text"}>Tell me about your idea</label>
                    <textarea className={"border-2 border-black rounded pl-2"} {...form.register("message")} />
                </div>
                {form.formState.errors.message && <p className={"font-neue-haas-grotesk-text font-semibold text-red-500 selection:text-neutral-500"}>{form.formState.errors.message.message}</p>}
            </div>

            <div className={"flex flex-col"}>
                <div className={"flex flex-col"}>
                    <label htmlFor="contactMethod" className={"font-neue-haas-grotesk-display font-bold text-lg md:text-xl pr-2 selection:text-blue-499 cursor-text"}>Preferred contact method</label>
                    <input type="text" placeholder="text, instagram, etc." className={"border-2 border-black rounded pl-2 placeholder:text-sm md:placeholder:text-base"} {...form.register("contactMethod")} />
                </div>
                {form.formState.errors.contactMethod && <p className={"font-neue-haas-grotesk-text font-semibold text-red-500 selection:text-neutral-500"}>{form.formState.errors.contactMethod.message}</p>}
            </div>

            <button
                type="submit"
                className={"inline-flex items-center justify-center border-2 rounded-xl border-blue-499 group hover:bg-blue-499"}>
                <span className={"font-neue-haas-grotesk-display font-bold text-xl text-blue-499 group-hover:text-black select-none"}>SUBMIT</span>
                <svg className={"w-9 h-auto fill-blue-499 group-hover:fill-black"} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
                </svg>
            </button>
        </form>
    )
}

export default ContactForm;
