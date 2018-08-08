.container.footer-wrap{
  background: #fff;
  width: 100%;
  height: 16px;
  .footer {
    background: #fff;
    position: relative;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    color: $purpleLogo;
    letter-spacing: 3px;
    line-height: 14px;
    text-transform: uppercase;


    .logo-title{
      width: 120px;
    }

    .copyright{
      width: 100%;
      border-top: 1px solid $purpleLogo;
      margin-top: 15px;
      padding-top: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      p{
        margin: 2px;
        &.icon {
          font-size: 2em;
        }
      }
    }

    .contact{
      h4{
        color: rgba(0,0,0,.6);
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
      }

      .fas {
        font-size: 1.1em;
      }
      .phone{
        padding: 4px 0;
      }

      p, div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        // font-size: .9em;

        .number{
          font-weight: 500;
        }
      }
    }

    .address{
      display: flex;
      align-items: center;
      flex-direction: row;
      .fas {
        font-size: 2em;
      }
      p{
        margin-left: 3px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: wrap;

        span{
          display: flex;
          align-items: center;
          flex-direction: row;
        }
      }
    }

    .social-row{
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: fit-content;
      align-items: center;
      padding-right: 0;
      // margin: 2px 6px 15px;

      .icon-wrap{
        color: $purpleLogo;
        display: flex;
        justify-content: flex-end;
        margin-left: 10px;

        a{
          position: relative;
          width: 18px;
          height: 18px;
          margin: 0 10px;
          border: 2px solid $purpleLogo;
          border-radius: 30%;

          &:nth-child(4){
            margin-right: 0;
          }
        }

        p {
          // color: #BF2455;
          font-weight: 400;
          // margin-right: 5px;
          text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
        }

        align-items: center;
        .fab{
          position: absolute;
          top: 50%;
          left: 58.3%;
          transform: translate(-50%, -50%);
          text-align: center;
          line-height: 30px;
          font-size: 1.6em;
          color: $purpleLogo;
          transition: all .2s ease-in-out;

          &:hover{
            cursor: pointer;
          }
        }
      }
    }
  }
}
