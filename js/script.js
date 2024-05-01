import {Sortable} from 'sortablejs';

const app = Sortable();

const sortableList = document.querySelectorAll(".sortable-list");
const items = document.querySelectorAll(".item");
//* on crée une variables qui cible tous les item

items.forEach(item => {
    //* On rajouter dragstart à tous les items donc les LI du HTML (Dragstart permet le déplacement des éléments)
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"),0);
        //* Je rajoute une class dragging à toutes les LI quand on veut bouger l'élément.
        // Le setTimeout permet d'ajouter le dragging apres un certains temps.
    });
    // * Permet de remove la class dragging à la fin du mouvement, (dragend intervient quand nous relachons avec la souris ou échap)
    item.addEventListener("dragend", () => {
        item.classList.remove("dragging")
    });
});

const initSortableList = (e) =>{
    const draggingItem = sortableList.querySelector(".dragging")
    //* Prend tous les items sauf celui qui est en cour de mouvement avec le drag et crée un tableau avec les autres.
    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

// Trouve l'emplacement dans le tableau et replace l'élément en mouvement.
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.osssetTop + sibling.offsetHeight / 2;
    });

    // Permet d'insérer l'élément avant le prochain élément.
    sortableList.insertBefore(draggingItem, nextSibling);
}


sortableList.addEventListener("dragover", initSortableList);