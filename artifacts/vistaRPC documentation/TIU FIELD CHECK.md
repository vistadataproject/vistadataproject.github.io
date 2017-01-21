---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD CHECK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD CHECK{:/}
 tag | {::nomarkdown}CHKFLD{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Very similar to IMPORT^TIUSRVF, except does not save template fields.Resolves self referencing loops, and takes into account fields withthe same name already saved.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RECSET{:/} | {::nomarkdown}LIST{:/} |  |  |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CHKFLD^[TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 Method comment | Input: <None>
 First comment | {::nomarkdown}<pre>Output: RESULT (see below for description)<br/>Similar to IMPORT^TIUSRVF; takes and parses XML fields to<br/>see if they have a matching field in the database.  Also resolves self<br/>referencing fields, and updates the XML.  Returns RESULT, which is a <br/>list of fields in format ORIGINAL_FIELD_NAME^CODE^NEW_FIELD_NAME.<br/>If the CODE is 1 or 2, then the NEW_FIELD_NAME is blank.  If the CODE<br/>is 0, then the NEW_FIELD_NAME has the renamed field name.  In that <br/>case, the XML has been updated with the new name where ever the <br/>original name had occurred.</pre>{:/}
 Code | {::nomarkdown}  N FIRST,RENAME,SAVESET,I,J,X,Y,OLD,ERR,CURS,CUR,RSET,K,FSET<br> S FIRST=1,RENAME=0,I=0,ERR=0,FSET="^TMP(""TIUFLDXML"",$J)"<br> F  D  Q:ERR!('RENAME)<br> .D IMPORT2^TIUSRVF(.RSET,FSET,0)<br> .I FIRST S FIRST=0,I=0 F  S I=$O(RSET(I)) Q:I'>0  S SAVESET(I)=$P(RSET(I),U,1)<br> .S I=0<br> .F  S I=$O(RSET(I)) Q:(I'>0)!ERR  I $P(RSET(I),U,3)="XML FORMAT ERROR" S ERR=1<br> .Q:ERR<br> .S I=0,RENAME=0<br> .;LOOP THROUGH THE NAMES AND RENAME DUPLICATE NAMES<br> .F  S I=$O(RSET(I)) Q:I'>0  D<br> ..S CURS=$P(RSET(I),U,2),X=1<br> ..I CURS="0" S X=3,RENAME=1<br> ..I $L(CURS)>1 D<br> ...S CURS=$E(CURS,3,$L(CURS)),OLD=$P(RSET(I),U,1)<br> ...I CURS=OLD S RSET(I)=CURS_U_2<br> ...E  S RSET(I)=OLD_U_0_U_CURS,X=3,RENAME=1<br> ..S CUR=$P(RSET(I),U,X),J=0<br> ..F  S J=$O(RSET(J)) Q:(J'<I)  D<br> ...S K=$P(RSET(J),U,2),Y=1 I +K=0 S Y=3<br> ...S OLD=$P(RSET(J),U,Y)<br> ...I OLD=CUR D  ;SAME NAME FOUND; RENAME CURRENT ITEM<br> ....S Y=1<br> ....I X=3 S Y=1+(+$E(CUR,$L($P(RSET(I),U,1))+1,$L(CUR)))<br> ....S $P(RSET(I),U,2)=0,$P(RSET(I),U,3)=$P(RSET(I),U,1)_Y<br> ....S X=3,J=0,CUR=$P(RSET(I),U,X),RENAME=1<br> .I RENAME D UPDTXML(.RSET,FSET)<br> I 'ERR D<br> .S I=0,J=0<br> .F  S I=$O(SAVESET(I)) S J=$O(RSET(J)) Q:(I'>0)!(J'>0)  D<br> ..I SAVESET(I)'=$P(RSET(J),U,1) D<br> ...S Y=$P(RSET(J),U,2)<br> ...I +Y=1 S X=0 ; CHANGE THIS X=0 TO X=3 WHEN THE GUI IS READY<br> ...E  S X=0<br> ...S $P(RSET(J),U,2)=X,$P(RSET(J),U,3)=$P(RSET(J),U,1),$P(RSET(J),U,1)=SAVESET(I)<br> S I=0,J=0<br> F  S I=$O(RSET(I)),J=J+1 Q:I'>0  S RESULT(J)=RSET(I){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}