#include <stdio.h>
#include <stdlib.h>
#include <string.h>



int t[100];
int n = 0;

void f(char *nom) {
    FILE *fp = fopen(nom, "r");
    char buf[256];
    int i, s, mx, mn, c;
    if (fp != NULL) {
        n = 0;
        while (fgets(buf, 256, fp) != NULL) {
            if (n < 100) {
                t[n] = atoi(buf);
                n++;
            }
        }
        fclose(fp);
        s = 0; mx = t[0]; mn = t[0]; c = 0;
        for (i = 0; i < n; i++) {
            s = s + t[i];
            if (t[i] > mx) mx = t[i];
            if (t[i] < mn) mn = t[i];
        }
        for (i = 0; i < n; i++) {
            if (t[i] > 1500) c++;
        }
        if (n > 0) {
            printf("Nombre de paquets : %d\n", n);
            printf("Taille moyenne : %d\n", s / n);
            printf("Taille max : %d\n", mx);
            printf("Taille min : %d\n", mn);
            printf("Paquets > MTU : %d\n", c);
            if (c * 100 / n > 10) {
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