/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@emotion/core';
import { gray5, accent2, backgroundColour2 } from './Styles';
import { RecipeData } from './RecipeData';
import { Recipe } from './Recipe';

interface Props {
    data: RecipeData[];
    renderItem?: (item: RecipeData) => JSX.Element;
}

export const RecipeList: FC<Props> =({data, renderItem}) => {
    return (
    <ul
        css={css`
            list-style: none;
            margin: 10px 0 0 0 ;
            padding: 0px 20px;
            background-color: ${backgroundColour2};
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            border-top: 3px solid ${accent2};
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
    >
        { data.map(recipe => (
        <li
            css={css`
                border-top: 1px solid ${gray5};
                :first-of-type {
                    border-top: none;
                }
            `}
            key = {recipe.id}
        >
            {
                renderItem ? renderItem(recipe) :
                <Recipe data={recipe}
                css={css`
                    border-top: 1px solid ${gray5};
                    :first-of-type {
                    border-top: none;
                    }
            `}/>}
        </li>
        ))}
    </ul>
);
};