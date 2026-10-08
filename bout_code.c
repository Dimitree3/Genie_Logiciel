#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int tailles_paquets[100];
int nb_paquets = 0;

void f(char *nom) {
    FILE *fp = fopen(nom, "r");
    char buf[256];
    int i, taille_totale, taille_max, taille_min, nb_paquets_sup_mtu;
    if (fp != NULL) {
        nb_paquets = 0;
        while (fgets(buf, 256, fp) != NULL) {
            if (nb_paquets < 100) {
                tailles_paquets[nb_paquets] = atoi(buf);
                nb_paquets++;
            }
        }
        fclose(fp);
        taille_totale = 0; taille_max = tailles_paquets[0]; taille_min = tailles_paquets[0]; nb_paquets_sup_mtu = 0;
        for (i = 0; i < nb_paquets; i++) {
            taille_totale = taille_totale + tailles_paquets[i];
            if (tailles_paquets[i] > taille_max) taille_max = tailles_paquets[i];
            if (tailles_paquets[i] < taille_min) taille_min = tailles_paquets[i];
        }
        for (i = 0; i < nb_paquets; i++) {
            if (tailles_paquets[i] > 1500) nb_paquets_sup_mtu++;
        }
        if (nb_paquets > 0) {
            printf("Nombre de paquets : %d\n", nb_paquets);
            printf("Taille moyenne : %d\n", taille_totale / nb_paquets);
            printf("Taille max : %d\n", taille_max);
            printf("Taille min : %d\n", taille_min);
            printf("Paquets > MTU : %d\n", nb_paquets_sup_mtu);
            if (nb_paquets_sup_mtu * 100 / nb_paquets > 10) {
                printf("ATTENTION : trop de paquets fragmentes\n");
            } else {
                printf("OK\n");
            }
        } else {
            printf("Fichier vide\n");
        }
    } else {
        printf("Erreur ouverture %s\n", nom);
    }
}

int main(int argc, char **argv) {
    if (argc > 1) {
        f(argv[1]);
    } else {
        printf("Usage : %s fichier\n", argv[0]);
    }
    return 0;
}