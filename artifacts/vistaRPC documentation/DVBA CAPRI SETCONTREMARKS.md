---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBA CAPRI SETCONTREMARKS 

 property | value 
--- | --- 
 label | {::nomarkdown}DVBA CAPRI SETCONTREMARKS{:/}
 tag | {::nomarkdown}WPSET{:/}
 routine | [DVBACREM](http://code.osehra.org/dox/Routine_DVBACREM_source.html)
 return value type | {::nomarkdown}WORD PROCESSING{:/}
 description | {::nomarkdown}The RPC sets remarks sent to the contractor into the new word processingfield #103 of the 2507 EXAM file 396.4. The 2507 EXAMs are connected tothe 2507 REQUEST file via a pointer.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RQID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The is the 2507 REQUEST ID from the 2507 REQUEST file 396.3. The2507 EXAMs are connected to the 2507 REQUEST file via a pointer. Theremarks sent to the contractor are stored in the new word processing field#103 of the 2507 EXAM file 396.4. {:/} | 
| {::nomarkdown}TEXT{:/} | {::nomarkdown}WORD PROCESSING{:/} | {::nomarkdown}32000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The is the text from the contractor remarks. They will be stored in thenew word processing field #103 of the 2507 EXAM file 396.4{:/} | 
| {::nomarkdown}RETURN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Returns a '1' if remarks are successfully set and a '0' if the remarks arenot set.{:/} | 
| {::nomarkdown}EIEN{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The is the 2507 EXAM ID from the 2507 EXAM file 396.4. The remarkssent to the contractor are stored in the new word processing field #103 ofthe 2507 EXAM file 396.4. The 2507 EXAMs are connected to the 2507 REQUESTfile via a pointer.{:/} | 




 Generated on January 13th 2017, 6:55:29 am