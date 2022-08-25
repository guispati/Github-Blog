import { LineInfo, SearchFormContainer } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const searchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

interface SearchFormProps {
    postsNumber: number;
    fetchPosts: (query: string) => void;
}

export function SearchForm({ postsNumber, fetchPosts }: SearchFormProps) {
    const { register, watch } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    const query = watch('query');

    useEffect(() => {
        fetchPosts(watch('query'));
    }, [query])


    return (
        <SearchFormContainer>
            <LineInfo>
                <h3>Publicações</h3>
                <span>{postsNumber} publicaç{postsNumber>1 ? 'ões' : 'ão'}</span>
            </LineInfo>

            <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
        </SearchFormContainer>
    );
}