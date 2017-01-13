---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VBECS DIVISION LOOKUP 

 property | value 
--- | --- 
 label | {::nomarkdown}VBECS DIVISION LOOKUP{:/}
 tag | {::nomarkdown}DIV{:/}
 routine | [VBECRPCM](http://code.osehra.org/dox/Routine_VBECRPCM_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns XML containing a list of active VAMC divisions associatedwith a Medical Center. XML Mapping:DivisionId element =   INSTITUTION file (#4) / STATION NUMBER field (#99)DivisionName element = INSTITUTION file (#4) / NAME field (#.01) XML Example:<Divisions>    <Division>        <DivisionId>589</DivisionId>        <DivisionName>VA HEARTLAND - WEST, VISN 15</DivisionName>    </Division>    <Division>        <DivisionId>589A4</DivisionId>        <DivisionName>COLUMBIA, MO VAMC</DivisionName>    </Division>    <Division>        <DivisionId>589A5</DivisionId>        <DivisionName>TOPEKA, KS VAMC</DivisionName>    </Division>    <Division>        <DivisionId>589A6</DivisionId>        <DivisionName>LEAVENWORTH VAMC</DivisionName>    </Division>    <Division>        <DivisionId>589A7</DivisionId>        <DivisionName>WICHITA VAMC</DivisionName>    </Division></Divisions>{:/}




 Generated on January 13th 2017, 6:15:57 am