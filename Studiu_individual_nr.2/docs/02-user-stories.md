# User Stories și criterii de acceptare

Model: „În calitate de [utilizator], doresc să [acțiune], pentru a [beneficiu]."

| ID | User Story | Criterii de acceptare |
| --- | --- | --- |
| US-01 | În calitate de elev, doresc să adaug o sarcină, pentru a nu uita ce am de făcut. | Pot completa titlul, descrierea, prioritatea, termenul și responsabilul; după salvare, sarcina apare în listă și se afișează mesajul „Sarcina a fost adăugată." |
| US-02 | În calitate de elev, doresc ca formularul să valideze datele, pentru a evita sarcinile greșite. | Titlul gol sau sub 3 caractere afișează eroare lângă câmp; sarcina nu se salvează până la corectare. |
| US-03 | În calitate de elev, doresc să modific o sarcină, pentru a corecta informațiile. | Butonul „Editează" deschide formularul completat; modificările salvate apar corect în listă. |
| US-04 | În calitate de elev, doresc să schimb statusul unei sarcini, pentru a arăta progresul. | Statusul se poate schimba direct din card; noua valoare este afișată, iar sarcinile finalizate apar tăiate. |
| US-05 | În calitate de elev, doresc să șterg o sarcină, pentru a elimina ce nu mai este relevant. | Apare o confirmare; după „Da, șterge" sarcina dispare, după „Anulează" rămâne în listă. |
| US-06 | În calitate de elev, doresc să caut și să filtrez sarcinile, pentru a găsi rapid ce mă interesează. | Lista afișează doar sarcinile care corespund căutării, statusului și priorității alese; dacă nu există rezultate, apare un mesaj și butonul „Resetează filtrele". |
| US-07 | În calitate de elev, doresc un dashboard cu statistici, pentru a vedea progresul echipei. | Dashboard-ul arată totalul, numărul pe status, sarcinile restante, progresul în procente și următoarele termene; valorile se actualizează după orice modificare. |
| US-08 | În calitate de elev, doresc mesaje clare la încărcare și la erori, pentru a ști ce se întâmplă. | În timpul încărcării apare „Se încarcă..."; la eroare apare mesajul și butonul „Reîncarcă"; fără sarcini apare „Nu există sarcini momentan." |
| US-09 | În calitate de elev, doresc ca sarcinile să rămână după reîncărcarea paginii, pentru a nu pierde datele. | După refresh, lista conține aceleași sarcini. |
