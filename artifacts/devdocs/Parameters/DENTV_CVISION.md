---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; DENTV CVISION<br/>
# DENTV CVISION

This parameter is multi-instance for the purpose of retrieving all the default values for all the CVision parameters. Set of codes type is used instead of the yes/no type as the treatment planning software expects NO&#x3D;0 and YES&#x3D;-1.   Instance name                    Value             Entitiy ----------------------  --------------------------  ------------ csApplicationName       free text                   Sys csCompanyName           free text                   Sys,Pkg,User csDebugMode             set of codes (y/n)          Sys,Pkg,User csDefaultMode           soc (y/n)                   Sys,Pkg,User csDefaultPrinter        free text                   Pkg,User csDefaultToPrimary      soc (y/n)                   Sys,Pkg csDoctorName            soc (y/n)                   Sys,Pkg,User csDragonEnabled         soc(y/n)                    Sys csExamSequence          free text (15:19)           Sys,Pkg,User csExcessPocket          numeric (0:15)              Sys,Pkg,User csExcessPocketColor     numeric (0-9,999,999,999)   Sys,Pkg,User csFGMFromGumLine        soc (y/n)                   Sys,Pkg,User csFGMWarning            free text (0:80)            Sys,Pkg,User csFurcationWarning      numeric (1:4)               Sys,Pkg,User csMGJWarning            numeric (1:10)              Sys,Pkg,User csMobilityWarning       numeric                     Sys,Pkg,User                          can only be .5,1,1.5,2,2.5 csNormPocketColor       numeric (0-9,999,999,999)   Sys,Pkg,User csPocketWarning         numeric (1:15)              Sys,Pkg,User csPrintChart            soc (y/n)                   Sys,Pkg,User csPrintPatNotes         soc (y/n)                   Sys,Pkg,User csPrintToothNotes       soc (y/n)                   Sys,Pkg,User csPrintTransactions     soc (y/n)                   Sys,Pkg,User csShowMGJTrace          soc (y/n)                   Sys,Pkg,User csSpeechFeedbackEn      soc (y/n)                   Sys csTransDisplay          numeric (0-9,999,999,999)   Sys,Pkg,User csWarnDuplicateTrans    soc (y/n)                   Sys,Pkg,User csShowSeqOnStart        soc (y/n)                   Sys,Pkg,User csSeqFormSettings       free text (0:100)           Sys,Pkg,User

## Properties

Property | Value
--- | ---
Summary | CVision Setup Parameters
Value Type | free text
Value Domain | 1-240
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | USER
5 | PACKAGE
9 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}