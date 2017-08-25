---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VBECS DIVISION LOOKUP<br/>
# VBECS DIVISION LOOKUP

This RPC returns XML containing a list of active VAMC divisions associatedwith a Medical Center. XML Mapping:DivisionId element =   INSTITUTION file (#4) / STATION NUMBER field (#99)DivisionName element = INSTITUTION file (#4) / NAME field (#.01) XML Example:<Divisions>    <Division>        <DivisionId>589</DivisionId>        <DivisionName>VA HEARTLAND - WEST, VISN 15</DivisionName>    </Division>    <Division>        <DivisionId>589A4</DivisionId>        <DivisionName>COLUMBIA, MO VAMC</DivisionName>    </Division>    <Division>        <DivisionId>589A5</DivisionId>        <DivisionName>TOPEKA, KS VAMC</DivisionName>    </Division>    <Division>        <DivisionId>589A6</DivisionId>        <DivisionName>LEAVENWORTH VAMC</DivisionName>    </Division>    <Division>        <DivisionId>589A7</DivisionId>        <DivisionName>WICHITA VAMC</DivisionName>    </Division></Divisions>

## Properties

Property | Value
--- | ---
Label | DIV
MUMPS Implementation | [VBECRPCM](http://code.osehra.org/dox/Routine_VBECRPCM_source.html)
Return Type | GLOBAL ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}