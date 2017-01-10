---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP GET TRANSACTIONS 

 property | value 
--- | --- 
 label | DENTV TP GET TRANSACTIONS
 tag | TXN
 routine | [DENTVTP5](http://code.osehra.org/dox/Routine_DENTVTP5_source.html)
 return value type | GLOBAL ARRAY
 description | Returns all of the Transaction type records from the Treatment Plan Transaction/Exam file (228.2) for a particular patient..

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | This is a pointer to the PATIENT file. | 
| vs:Input_Parameter-8994_02 | TYPE | LITERAL | 1 | true | This flag (T, E, P, or S) indicates the type of records to retrieve.  T = transaction records  E = periodontal exams  P = periodontal screening & recording  S = soft tissue lesion If not passed, default value is T | 
| vs:Input_Parameter-8994_02 | SDT | LITERAL | 7 | true | This is an optional date in Fileman format.   If passed only records greater than or equal to this date will be retrieved.  If not passed, default value is Jan 1, 2002 | 
| vs:Input_Parameter-8994_02 | EDT | LITERAL | 7 | true | This is an optional date in Fileman format.   If passed only records less than or equal to this date will be retrieved.  If not passed, default value is TODAY | 
| vs:Input_Parameter-8994_02 | PROV | LITERAL | 12 | true | This optional parameter will be the provider's record number (ien) to the NEW PERSON file (i.e., their DUZ value).   If passed, then only those records with that provider will be returned. | 