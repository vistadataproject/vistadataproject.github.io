---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU FIELD CHECK 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD CHECK{:/}
 tag | {::nomarkdown}CHKFLD{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Very similar to IMPORT^TIUSRVF, except does not save template fields.Resolves self referencing loops, and takes into account fields withthe same name already saved.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RECSET{:/} | {::nomarkdown}LIST{:/} |  |  |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CHKFLD^[TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 Method comment | Input: <None>
 First comment | {::nomarkdown}Output: RESULT (see below for description)<br/>Similar to IMPORT^TIUSRVF; takes and parses XML fields to<br/>see if they have a matching field in the database.  Also resolves self<br/>referencing fields, and updates the XML.  Returns RESULT, which is a <br/>list of fields in format ORIGINAL_FIELD_NAME^CODE^NEW_FIELD_NAME.<br/>If the CODE is 1 or 2, then the NEW_FIELD_NAME is blank.  If the CODE<br/>is 0, then the NEW_FIELD_NAME has the renamed field name.  In that <br/>case, the XML has been updated with the new name where ever the <br/>original name had occurred.{:/}
 Code | ```  N FIRST,RENAME,SAVESET,I,J,X,Y,OLD,ERR,CURS,CUR,RSET,K,FSET
 S FIRST=1,RENAME=0,I=0,ERR=0,FSET="^TMP(""TIUFLDXML"",$J)"
 F  D  Q:ERR!('RENAME)
 .D IMPORT2^TIUSRVF(.RSET,FSET,0)
 .I FIRST S FIRST=0,I=0 F  S I=$O(RSET(I)) Q:I'>0  S SAVESET(I)=$P(RSET(I),U,1)
 .S I=0
 .F  S I=$O(RSET(I)) Q:(I'>0)!ERR  I $P(RSET(I),U,3)="XML FORMAT ERROR" S ERR=1
 .Q:ERR
 .S I=0,RENAME=0
 .;LOOP THROUGH THE NAMES AND RENAME DUPLICATE NAMES
 .F  S I=$O(RSET(I)) Q:I'>0  D
 ..S CURS=$P(RSET(I),U,2),X=1
 ..I CURS="0" S X=3,RENAME=1
 ..I $L(CURS)>1 D
 ...S CURS=$E(CURS,3,$L(CURS)),OLD=$P(RSET(I),U,1)
 ...I CURS=OLD S RSET(I)=CURS_U_2
 ...E  S RSET(I)=OLD_U_0_U_CURS,X=3,RENAME=1
 ..S CUR=$P(RSET(I),U,X),J=0
 ..F  S J=$O(RSET(J)) Q:(J'<I)  D
 ...S K=$P(RSET(J),U,2),Y=1 I +K=0 S Y=3
 ...S OLD=$P(RSET(J),U,Y)
 ...I OLD=CUR D  ;SAME NAME FOUND; RENAME CURRENT ITEM
 ....S Y=1
 ....I X=3 S Y=1+(+$E(CUR,$L($P(RSET(I),U,1))+1,$L(CUR)))
 ....S $P(RSET(I),U,2)=0,$P(RSET(I),U,3)=$P(RSET(I),U,1)_Y
 ....S X=3,J=0,CUR=$P(RSET(I),U,X),RENAME=1
 .I RENAME D UPDTXML(.RSET,FSET)
 I 'ERR D
 .S I=0,J=0
 .F  S I=$O(SAVESET(I)) S J=$O(RSET(J)) Q:(I'>0)!(J'>0)  D
 ..I SAVESET(I)'=$P(RSET(J),U,1) D
 ...S Y=$P(RSET(J),U,2)
 ...I +Y=1 S X=0 ; CHANGE THIS X=0 TO X=3 WHEN THE GUI IS READY
 ...E  S X=0
 ...S $P(RSET(J),U,2)=X,$P(RSET(J),U,3)=$P(RSET(J),U,1),$P(RSET(J),U,1)=SAVESET(I)
 S I=0,J=0
 F  S I=$O(RSET(I)),J=J+1 Q:I'>0  S RESULT(J)=RSET(I)```




 Generated on January 14th 2017, 7:26:35 am