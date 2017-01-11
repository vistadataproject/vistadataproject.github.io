---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB FORM DATA BACKUP 

 property | value 
--- | --- 
 label | DVBAB FORM DATA BACKUP
 tag | BACKUP
 routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
 return value type | SINGLE VALUE
 description | Makes a backup copy of a CAPRI template in case of data loss.  The backup is restored through the CAPRI GUI.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DVBIEN | LITERAL |  |  | The IEN of the template for which a backup is being created | 
| LISTBOX TEXT | LITERAL | 50 | true | Option field to allow the user to enter custom text to be attached to the saved data.  Displayed in the listbox on the GUI side. | 




 ###### Generated on January 11th 2017, 6:39:43 am