---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB FORM DATA BACKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB FORM DATA BACKUP{:/}
 tag | {::nomarkdown}BACKUP{:/}
 routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Makes a backup copy of a CAPRI template in case of data loss.  The backup is restored through the CAPRI GUI.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DVBIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The IEN of the template for which a backup is being created{:/} | 
| {::nomarkdown}LISTBOX TEXT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Option field to allow the user to enter custom text to be attached to the saved data.  Displayed in the listbox on the GUI side.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}