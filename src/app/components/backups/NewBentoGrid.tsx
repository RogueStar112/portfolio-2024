<article className='/collapse md:visible grid grid-cols-3 auto-rows-[81px] md:auto-rows-[192px] gap-4'>
              {[...Array(7)].map((_, i) => {
                    return (
                        <div key={`bento-${i}`} className={`rounded-xl border-2 border-green-400/10 dark:bg-onyx bg-neutral-100 place-items-center ${i === 0 ? "col-span-2 row-span-2 primary-project"  : ""} ${i === 4 || i === 5 ? "row-span-2 secondary-project" : ""} ${i === 3 || i === 6 || i === 2 || i === 1 ? "tertiary-project" : ""}`}>
                              
                              <h2 className={`${i === 0 ? "md:col-span-2 md:row-span-2 text-4xl [&>*]:block [&>*]:overflow-auto" : "text-lg [&>*]:block [&>*]:overflow-auto"}`}>
                                  {/* {i} */}
                                  {/* {i === 0 ? "MyBudget" : ""}
                                  {i === 1 ? "Drag n' Drop Pizza Game" : ""}
                                  {i === 2 ? "TuneMasher" : ""}
                                  {i === 3 ? "MoodCanvas" : ""} */}

                                    <ProjectDetails content={reveal_file[i]} />
                                    
                                    <div onClick={revealProject(i)}>
                                    <Image className='rounded-lg'  src={`${i === 0 ? "/images/MyBudgetBannerv4.png" : ""}${i === 1 ? "/images/PizzaGamev2.png" : ""}${i === 2 ? "/images/MyJournalTBA.png" : ""}${i === 3 ? "/images/MoodCanvasBannerv2.png" : ""}${i === 4 ? "/images/MyNutritionProjectGridv3.png" : ""}${i === 5 ? "/images/TodoAppPlaceholder.png" : ""}${i === 6 ? "/images/RouteRaterTBA.png" : ""}`} 
width={`${i === 0 ? "570" : "0"}${i === 4 || i === 5 || i == 2 || i == 6 || i == 3|| i == 1 ? "277" : "0"}`} height={`${i === 0|| i == 1 || i == 2 || i === 4 || i === 5 ? "400" : "0"}${i === 3 || i === 6  ? "192" : ""}`} alt={'BentoImage'}/>
                                    </div>
                        
                                  {/* {i === 5 ? "Todo App" : ""}
                                  {i === 6 ? "Route Rater" : ""} */}
                                  {/* {i === 5 ? "Todo App" : ""} 
                                  {i === 5 ? "Todo App" : ""} */}
                              </h2>

                              {/* <div className="collapse" aria-label="project-tags" className={`${i === 4 || i === 5 ? "w-full h-full" : ""}`}>
                                {i === 3 ? "Mood tracking app. Done as a group project." : ""}
                                {i === 4 ? "Nutrition-tracking app. Powered with PHP & Laravel." : ""}
                                {i === 5 ? "Get stuff done and on time with this mobile-friendly app!" : ""}
                              </div> */}

                        </div>
                    )  
                })}
              {/* <div>

              </div> */}
            </article>