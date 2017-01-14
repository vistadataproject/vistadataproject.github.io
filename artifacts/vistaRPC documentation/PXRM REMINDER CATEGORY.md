---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; PXRM REMINDER CATEGORY 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}PXRM REMINDER CATEGORY{:/}
 tag | {::nomarkdown}CATEGORY{:/}
 routine | [PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}List reminders and categories in display order for a reminder category.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CATEGORY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Category ien [#811.7]{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CATEGORY^[PXRMRPCD](http://code.osehra.org/dox/Routine_PXRMRPCD_source.html)
 Method comment | Get category information
 First comment | {::nomarkdown}Input parameter Category ien [#811.7]{:/}
 Input parameters | {::nomarkdown}CIEN{:/}
 Code | ```  N DATA,IC,IEN,NAME,PNAME,RIEN,SEQ,SUB,TEMP,USAGE
 S IC=0
 S NAME=$G(^PXRMD(811.7,CIEN,0)) I NAME="" Q
 S SUB=0 K TEMP
 F  S SUB=$O(^PXRMD(811.7,CIEN,2,SUB)) Q:SUB=""  D
 .S DATA=$G(^PXRMD(811.7,CIEN,2,SUB,0)) Q:DATA=""
 .S RIEN=$P(DATA,U) Q:'RIEN
 .S SEQ=$P(DATA,U,2)_0
 .;Include only CPRS reminders
 .S USAGE=$P($G(^PXD(811.9,RIEN,100)),U,4) I USAGE'["C",USAGE'["*" Q
 .I USAGE["L"!(USAGE["O") Q
 .;Skip inactive reminders
 .S DATA=$G(^PXD(811.9,RIEN,0)) Q:DATA=""  Q:$P(DATA,U,6)
 .S NAME=$P(DATA,U) I NAME="" S NAME="Unknown"
 .;or printname
 .S PNAME=$P(DATA,U,3)
 .S TEMP(SEQ)=RIEN_U_NAME_U_PNAME
 S SEQ=""
 F  S SEQ=$O(TEMP(SEQ)) Q:SEQ=""  D
 .S IC=IC+1,ORY(IC)="R"_U_TEMP(SEQ)
 S SUB=0 K TEMP
 F  S SUB=$O(^PXRMD(811.7,CIEN,10,SUB)) Q:SUB=""  D
 .S DATA=$G(^PXRMD(811.7,CIEN,10,SUB,0)) Q:DATA=""
 .S IEN=$P(DATA,U) Q:'IEN
 .S SEQ=$P(DATA,U,2),TEMP(SEQ)=IEN
 S SEQ=""
 F  S SEQ=$O(TEMP(SEQ)) Q:SEQ=""  D
 .S SUB=TEMP(SEQ) Q:'SUB
 .S NAME=$P($G(^PXRMD(811.7,SUB,0)),U) Q:NAME=""
 .S IC=IC+1,ORY(IC)="C"_U_SUB_U_NAME```




 Generated on January 14th 2017, 7:26:35 am