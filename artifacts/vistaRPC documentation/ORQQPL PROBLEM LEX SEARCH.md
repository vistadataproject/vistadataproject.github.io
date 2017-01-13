---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL PROBLEM LEX SEARCH 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROBLEM LEX SEARCH{:/}
 tag | {::nomarkdown}LEXSRCH{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get a list from clinical lexicon for display in list or combo box{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get candidate Problems from LEX file
 Input Parameters | {::nomarkdown}FROM<br/>N<br/>VIEW<br/>ORDATE{:/}
 Lines | ```
 N LEX,VAL,VAL1,COD,CIEN,SYS,MAX,NAME,ORIMPDT,ICDCSYS,ICDCODE
 S ORIMPDT=$$IMPDATE^LEXU("10D")
 S:'+$G(ORDATE) ORDATE=DT
 S:'$G(N) N=100
 S:'$L($G(VIEW)) VIEW="PL1"
 D CONFIG^LEXSET("GMPL",VIEW,ORDATE)
 D LOOK^LEXA(FROM,"GMPL",N,"",ORDATE)
 S S=0
 F  S S=$O(LEX("LIST",S)) Q:S<1  D
 . S VAL1=LEX("LIST",S)
 . S COD="",CIEN="",SYS="",NAME="",ICDCODE=""
 . S ICDCSYS=$S(ORDATE<ORIMPDT:"ICD",1:"10D")
 . I $L(VAL1,"CPT-4 ")>1 D
 .. S SYS=$S(ORDATE<ORIMPDT:"ICD-9-CM ",1:"ICD-10-CM ")
 .. S COD=$S(ORDATE<ORIMPDT:"799.9",1:"R69")
 .. S CIEN=""
 .. S NAME=$P(VAL1," (CPT-4")
 . I $L(VAL1,"DSM-IV ")>1 D
 .. S SYS="DSM-IV "
 .. S COD=$P($P(VAL1,SYS,2),")")
 .. S:COD["/" COD=$P(COD,"/",1)
 .. S ICDCODE=$$ONE^LEXU($P(VAL1,U,1),ORDATE,ICDCSYS)
 .. S ICDCODE=$S(ICDCODE["":COD,1:ICDCODE)
 .. S CIEN=+$$ICDDATA^ICDXCODE(ICDCSYS,$G(ICDCODE),ORDATE,"E")
 .. S NAME=$P(VAL1," (DSM-IV")
 .. ;
 . I $L(VAL1,"(TITLE 38 ")>1 D
 .. S SYS="TITLE 38 "
 .. S COD=$P($P(VAL1,SYS,2),")")
 .. S:COD["/" COD=$P(COD,"/",1)
 .. S ICDCODE=$$ONE^LEXU($P(VAL1,U,1),ORDATE,ICDCSYS)
 .. S ICDCODE=$S(ICDCODE["":COD,1:ICDCODE)
 .. S CIEN=+$$ICDDATA^ICDXCODE(ICDCSYS,$G(ICDCODE),ORDATE,"E")
 .. S NAME=$P(VAL1,"(TITLE 38 ")
 .. ;
 . I $L(VAL1,"ICD-9-CM ")>1 D
 .. S SYS="ICD-9-CM "
 .. S COD=$P($P(VAL1,SYS,2),")")
 .. S:COD["/" COD=$P(COD,"/",1)
 .. S CIEN=+$$ICDDATA^ICDXCODE("DIAG",$G(COD),ORDATE,"E")
 .. S NAME=$P(VAL1," (ICD-9-CM")
 .. ;
 . I $L(VAL1,"ICD-10-CM ")>1 D
 .. S SYS="ICD-10-CM "
 .. S COD=$P($P(VAL1,SYS,2),")")
 .. S:COD["/" COD=$P(COD,"/",1)
 .. S CIEN=+$$ICDDATA^ICDXCODE("DIAG",$G(COD),ORDATE,"E")
 .. S NAME=$P(VAL1," (ICD-10-CM")
 . I $L(NAME)=0 S NAME=$P($P(VAL1," (")," *")
 . ;
 . ; jeh Clean left over codes
 . S NAME=$P(NAME," (CPT-4")
 . S NAME=$P(NAME," (DSM-IV")
 . S NAME=$P(NAME,"(TITLE 38 ")
 . S NAME=$P(NAME," (ICD-9-CM")
 . S NAME=$P(NAME," (ICD-10-CM")
 . ;
 . S VAL=NAME_U_COD_U_CIEN_U_SYS ; ien^.01^icd^icdifn^system
 . S LIST(S)=VAL
 . S MAX=S
 I $G(MAX)'="" S LIST(MAX+1)=$G(LEX("MAT"))
 K ^TMP("LEXSCH",$J)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}BACK/FORE FLAG{:/} | 
| {::nomarkdown}NUM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}MAX NUMBER OF LIST ELEMENTS{:/} | 




 Generated on January 13th 2017, 6:55:28 am