function getPoids(poids, t, A, O, E){				
    poids += t * (A - O) * E;
    return poids;
}

function getSortieAttendue(poids){
    if(poids != 0)	return 1;
    else			return 0;
}

function learn(number) {
    for(var i  = 0; i < GRID_WIDTH ; i++){
        for(var j  = 0; j < GRID_HEIGHT ; j++){
            var E = 0;
            if(pixels[i][j]){
                E = 1;
                if (HALO) {
                    grille[i-1][j-1][number] = getPoids(grille[i-1][j-1][number], 0.5, getSortieAttendue(grille[i-1][j-1][number]), 1, 0.4);
                    grille[i][j-1][number] = getPoids(grille[i][j-1][number], 0.5, getSortieAttendue(grille[i][j-1][number]), 1, 0.4);
                    grille[i+1][j-1][number] = getPoids(grille[i+1][j-1][number], 0.5, getSortieAttendue(grille[i+1][j-1][number]), 1, 0.4);
                    grille[i-1][j][number] = getPoids(grille[i-1][j][number], 0.5, getSortieAttendue(grille[i-1][j][number]), 1, 0.4);
                    grille[i+1][j][number] = getPoids(grille[i+1][j][number], 0.5, getSortieAttendue(grille[i+1][j][number]), 1, 0.4);
                    grille[i-1][j+1][number] = getPoids(grille[i-1][j+1][number], 0.5, getSortieAttendue(grille[i-1][j+1][number]), 1, 0.4);
                    grille[i][j+1][number] = getPoids(grille[i][j+1][number], 0.5, getSortieAttendue(grille[i][j+1][number]), 1, 0.4);
                    grille[i+1][j+1][number] = getPoids(grille[i+1][j+1][number], 0.5, getSortieAttendue(grille[i+1][j+1][number]), 1, 0.4);
                }
            }
            grille[i][j][number] = getPoids(grille[i][j][number], 0.5, getSortieAttendue(grille[i][j][number]), 1, E);					
        }
    }			
}

function process() {
    for(var i = 0; i < OUTPUT_COUNT; i++)
            sorties[i] = 0;
    for(var i  = 0; i < GRID_WIDTH ; i++){
        for(var j  = 0; j < GRID_HEIGHT ; j++){
            for(var k = 0; k < OUTPUT_COUNT ; k++){
                if(pixels[i][j] == true && grille[i][j][k] != 0)
                    sorties[k]++;
            }
        }
    }
    
    var numbers = [];
    var z = 0;
    for(var i = 0; i < OUTPUT_COUNT; i++){
        if(sorties[i] > NEURONE_SEUIL){
            numbers[z] = i;
            z++;
        }					
    }
    montrerLePoidsDeChaqueChiffre(sorties);
    return numbers;
}