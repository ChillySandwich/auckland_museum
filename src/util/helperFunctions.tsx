import { LanguageButton } from '../components/LanguageButton'
import { NavigationButton } from '../components/NavigationButton'
import ProjectText from '../components/ProjectText'
import { IText } from "../interfaces/DataInterfaces"

export const displayTouchPointPage = (orientation: string, language: boolean, descriptionHeader: IText, description: IText, imageUrl: string, handleNavigation: React.TouchEventHandler<HTMLButtonElement>, handleLanguageChange: React.TouchEventHandler<HTMLButtonElement>) => {

    return (
        <div style={{ display: 'flex', flexDirection: orientation === 'horizontal' ? 'row' : 'column', }}>

            {
                orientation === 'horizontal' ?
                    <>
                        <div style={{ padding: '0px 50px 0px 50px', height: '100%', width: 1920 * 1 / 3, }}>
                            <ProjectText
                                orientation={orientation}
                                language={language}
                                title={descriptionHeader}
                                subtitle={description}
                            />

                            <div style={{ margin: '2em', display: 'flex', flexDirection: 'row' }}>
                                <NavigationButton text={"Back"} handleTouchEnd={(handleNavigation)} />
                                <div style={{ marginTop: '2em' }}>
                                    <LanguageButton text={`Switch to ${language ? "Te Reo" : "English"}`} handleTouchEnd={handleLanguageChange} />
                                </div>
                            </div>

                        </div>


                        <div style={{ height: 1080, width: 1920 * 2 / 3, overflow: 'hidden' }}>
                            <img style={{ objectFit: 'cover', maxHeight: '100%' }} src={imageUrl} alt={'touchpoint'} />
                        </div>

                    </>

                    :

                    <>
                        <div
                            style={{ height: 1920 * 2 / 3, width: 1080, overflow: 'hidden' }}>
                            <img style={{ objectFit: 'cover', maxHeight: '100%' }} src={imageUrl} alt={'touchpoint'} />
                        </div>

                        <div style={{ padding: '0px 50px 0px 50px' }}>
                            <ProjectText
                                orientation={orientation}
                                language={language}
                                title={descriptionHeader}
                                subtitle={description}

                            />
                        </div>

                        <div style={{ margin: '3em 0 3em 5.5em', display: 'flex', flexDirection: 'row' }}>
                            <NavigationButton text={"Back"} handleTouchEnd={(handleNavigation)} />
                            <div style={{ marginTop: '2em' }}>
                                <LanguageButton text={`Switch to ${language ? "Te Reo" : "English"}`} handleTouchEnd={handleLanguageChange} />
                            </div>
                        </div>
                    </>
            }

        </div>

    )
}