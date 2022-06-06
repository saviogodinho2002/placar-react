#include <stdio.h>
#include <time.h>
#include <stdlib.h>

void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}


void bubbleSort(int arr[], int n)
{
   int i, j;
   for (i = 0; i < n-1; i++)

       for (j = 0; j < n-i-1; j++)
           if (arr[j] > arr[j+1])
              swap(&arr[j], &arr[j+1]);
}


void printArray(int arr[], int size)
{
    int i;
    for (i=0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}




int main()

{
    int vetor_elementos_1[10000];

    int vetor_elementos_2[10000];

    for(int i=0;i<10000;i++) vetor_elementos_1[i] = (rand() % 10000)+1;



    clock_t Ticks[2];
    Ticks[0] = clock();

    bubbleSort(vetor_elementos_1,10000);

    Ticks[1] = clock();
    double Tempo = (Ticks[1] - Ticks[0]) * 1000.0 / CLOCKS_PER_SEC;
    printf("Tempo gasto médio caso: %g ms.\n", Tempo);

    for(int i = 0;i<10000;i++)
    {
        vetor_elementos_2[9999-i] = vetor_elementos_1[i];
    }


    clock_t Ticks1[2];
    Ticks1[0] = clock();

    bubbleSort(vetor_elementos_1,10000);
    Ticks1[1] = clock();
    Tempo = (Ticks1[1] - Ticks1[0]) * 1000.0 / CLOCKS_PER_SEC;
    printf("Tempo gasto melhor caso: %g ms.\n", Tempo);


    clock_t Ticks2[2];
    Ticks2[0] = clock();

    bubbleSort(vetor_elementos_2,10000);

    Ticks2[1] = clock();
    Tempo = (Ticks2[1] - Ticks2[0]) * 1000.0 / CLOCKS_PER_SEC;
    printf("Tempo gasto pior caso: %g ms.\n", Tempo);

    int vet[6] = {1, 8, 9, 2, 15, 20}
    bubblesort(vet, 6);
    for(int i=0; i<6; i++){
        printf("%d\n", vet[i]);
    }
    return 0;
}