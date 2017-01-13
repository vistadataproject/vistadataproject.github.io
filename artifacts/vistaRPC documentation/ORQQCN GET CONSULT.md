---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN GET CONSULT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN GET CONSULT{:/}
 tag | {::nomarkdown}GETCSLT{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Given a Consult ID from file 123, return the zero node to the client forloading into a consult record in RESULTS[0].  If the consult has anyassociated TIU records (completion, addenda) these will be returned inRESULTS[i..j].{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Retrieve a complete consult record
 Input Parameters | {::nomarkdown}ORIEN<br/>SHOWADD{:/}
 Lines | ```
 N ORDOC,ORREQ,I,X,SEQUENCE,ORI,ORGMRC,MEDRSLTS,ROOT
 S MEDRSLTS=1
 Q:+$G(ORIEN)=0
 I '$D(^GMR(123,ORIEN)) S ORY(0)="-1^Invalid consult" Q
 I $$PATCH^XPDUTL("GMRC*3.0*17") D
 . D DOCLIST^GMRCGUIB(.ORGMRC,ORIEN,MEDRSLTS)
 E  D DOCLIST^GMRCGUIB(.ORGMRC,ORIEN)
 S ORY(0)=ORGMRC(0),ORREQ=$P(ORY(0),U,14)
 S:+$G(SHOWADD) SEQUENCE="D"
 I ORREQ'="",$D(^VA(200,ORREQ,0)) S $P(ORY(0),U,14)=ORREQ_";"_$P(^VA(200,ORREQ,0),U,1)
 S X=0,I=1,ORI=1
 F  S X=$O(ORGMRC(50,X)) Q:X=""  D
 . S ORDOC=$P(ORGMRC(50,X),U,1)
 . S ROOT=U_$P($P(ORDOC,";",2),",",1)_")"
 . Q:'$D(@ROOT@(+ORDOC))
 . I ROOT="^TIU(8925)" D
 . . S ORY(I)=+ORDOC_U_$$RESOLVE^TIUSRVLO(+ORDOC)
 . . S $P(ORY(I),U,14)="1",I=I+1  ; parent treenode=1 for TIU docs
 . . S ORY("INDX",+ORDOC,ORI)=""
 . . I +$G(SHOWADD) D 
 . . . I +$$HASDAD^TIUSRVLI(+ORDOC) S ORI=I+1 D SETDAD^TIUSRVLI("ORY",+ORDOC,.ORI) S I=ORI+1 ; for treeview of related notes
 . . . I +$$HASKIDS^TIUSRVLI(+ORDOC) S ORI=I+1 D SETKIDS^TIUSRVLI("ORY",+ORDOC,.ORI) S I=ORI+1 ; for treeview of related notes
 . E  I $E(ROOT,1,5)="^MCAR" D
 . . S ORY(I)=ORGMRC(50,X)
 . . S $P(ORY(I),U,14)="2",I=I+1     ; parent treenode=2 for med results
 K ORY("INDX")```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult IEN from file #123, REQUEST/CONSULT.{:/} | 




 Generated on January 13th 2017, 6:55:29 am