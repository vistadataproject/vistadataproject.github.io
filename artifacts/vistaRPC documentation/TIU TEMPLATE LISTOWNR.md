---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE LISTOWNR 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE LISTOWNR{:/}
 tag | {::nomarkdown}LISTOWNR{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return subset of personal owners
 Input Parameters | {::nomarkdown}TIUFROM<br/>DIR{:/}
 Lines | ```
 N FILE,IENS,FIELDS,FLAGS,NUMBER,TIUPART,INDEX,SCREEN,ID,TIU,TIUERR
 S FILE=200,FIELDS="@;.01",FLAGS="PB",INDEX="B",NUMBER=44
 S (IENS,TIUPART,ID,TIU,TIUERR)=""
 I DIR=1 S FLAGS="P"
 S SCREEN="I $O(^TIU(8927,""AROOT"",Y,0))"
 D LIST^DIC(FILE,IENS,FIELDS,FLAGS,NUMBER,.TIUFROM,.TIUPART,INDEX,SCREEN,ID,"TIU","TIUERR")
 K TIU("DILIST",0)
 N DA,I
 S DA="",I=0
 F  S DA=$O(TIU("DILIST",DA),DIR) Q:'DA  D
 . S I=I+1
 . S TIUY(I)=$G(TIU("DILIST",DA,0))```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} |  |  |  |  | 
| {::nomarkdown}DIR{:/} |  |  |  |  | 




 Generated on January 13th 2017, 6:55:29 am